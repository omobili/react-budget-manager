import * as React from 'react';

export interface SummaryProps {}
export interface SummaryStates {}

export class Summary extends React.Component<SummaryProps, SummaryStates> {
    constructor(props: SummaryProps) {
        super(props);
    }

    render() {
        return (
            <h1>Résumé</h1>
        )
    }
}