import * as React from 'react';
export interface Props {
    id: string;
    data: any[];
    options: object;
    height: string;
    width: string;
}
export default class ReactFlot extends React.Component<Props, any> {
    constructor(props: Props);
    
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    draw(event: any, data: any): void;
    render(): any;
}
