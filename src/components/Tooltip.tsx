import { Component, ReactNode } from 'react';

interface TooltipProps {
    text: string;
    children: ReactNode;
}

interface TooltipState {
    isVisible: boolean;
}

class Tooltip extends Component<TooltipProps, TooltipState> {
    constructor(props: TooltipProps) {
        super(props);
        this.state = { isVisible: false };
    }

    showTooltip = () => {
        this.setState({ isVisible: true });
    };

    hideTooltip = () => {
        this.setState({ isVisible: false });
    };

    render() {
        const { text, children } = this.props;
        const { isVisible } = this.state;

        return (
            <span
                onMouseEnter={this.showTooltip}
                onMouseLeave={this.hideTooltip}
                className="relative cursor-pointer"
            >
                {children}
                {isVisible && (
                    <div className="absolute top-full left-1/2 text-nowrap transform -translate-x-1/2 mt-2 bg-gray-700 text-white text-xs rounded-md p-2">
                        {text}
                    </div>
                )}
            </span>
        );
    }
}

export default Tooltip;
