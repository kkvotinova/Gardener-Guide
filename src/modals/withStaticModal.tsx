import React, { FC } from 'react';

export type Entity = Record<string, any> | void;
type StaticModalState = { isOpen: boolean };
type StaticModalProps = Record<string, unknown>;

export type StaticModalWrappedComponent<T extends Entity = void> = FC<
  StaticModalExampleProps & { data?: T }
>;

export interface StaticModalExampleProps {
  isOpen: boolean;
  onClose: () => void;
}

const withStaticModal = <T extends Entity = void>(
  WrappedComponent: StaticModalWrappedComponent<T>,
) => {
  return class StaticModal extends React.Component<StaticModalProps, StaticModalState> {
    static instance?: StaticModal = undefined;

    static show(data?: T) {
      if (!StaticModal.instance) return;
      StaticModal.instance.data = data;
      StaticModal.instance.show();
    }

    static hide() {
      if (!StaticModal.instance) return;
      StaticModal.instance.data = undefined;
      StaticModal.instance.hide();
    }

    constructor(props: any) {
      super(props);

      this.state = {
        isOpen: false,
      };

      StaticModal.instance = this;

      this.show = this.show.bind(this);
      this.hide = this.hide.bind(this);
    }

    data: T | undefined = undefined;

    show() {
      this.setState({ isOpen: true });
    }

    hide() {
      this.setState({ isOpen: false });
    }

    render() {
      if (!this.state.isOpen) {
        return null;
      }

      const props = {
        onClose: this.hide,
        data: this.data,
        isOpen: this.state.isOpen,
      };

      return <WrappedComponent {...props} />;
    }
  };
};

export default withStaticModal;
