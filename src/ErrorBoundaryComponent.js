import React, { Component } from 'react';


// Added Error Boundary in case of unknown errors to stop app from crashing

class ErrorBoundary extends Component {
    state = {
      errorFound: false
    }

//TODO add CSS and animated "waiting" sushi roll

    componentDidCatch(error, info) {
        window.alert("Oops, something went wrong. Please refresh the page.")
        this.setState({ errorFound: true })
    }

    render() {
        if (this.state.errorFound) {
          return <h3 className="Error-alert">Something definitely went wrong. Please try again.</h3>

        }
        return this.props.children
    }
}

export default ErrorBoundary;
