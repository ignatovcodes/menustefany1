import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-dark-bg flex flex-col items-center justify-center px-6">
          <p className="text-gold text-lg mb-4">Что-то пошло не так</p>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
            className="px-6 py-3 bg-gold text-dark-bg font-semibold rounded-xl"
          >
            Обновить
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
