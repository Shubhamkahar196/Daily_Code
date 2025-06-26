import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-500 to-purple-600">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 max-w-md mx-4 text-center shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Oops! Something went wrong</h2>
            <p className="text-gray-600 mb-6">
              We're sorry, but something unexpected happened. Please refresh the page and try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-primary-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
