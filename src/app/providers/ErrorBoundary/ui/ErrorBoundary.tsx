import React, { Suspense } from 'react';
import { PageError } from 'widget/PageError';

interface ErrorBoundaryProps {
  readonly children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  shouldComponentUpdate(
    nextProps: ErrorBoundaryProps,
    nextState: ErrorBoundaryState
  ) {
    const { hasError } = this.state;
    const { hasError: nextHasError } = nextState;
    return hasError !== nextHasError;
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log(error, errorInfo);
    // eslint-disable-next-line
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <Suspense fallback="LOADING...">
          <PageError />
        </Suspense>
      );
    }

    return children;
  }
}

export { ErrorBoundary };
