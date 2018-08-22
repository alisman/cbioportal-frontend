import * as React from 'react';
import {ThreeBounce} from 'better-react-spinkit';
import { If, Else, Then } from 'react-if';
import Spinner from "react-spinkit";

export interface ILoader {
    isLoading:Boolean;
    style?:any;
}

export default class Loader extends React.Component<ILoader, {}> {

    public render() {
        return (
            <If condition={this.props.isLoading}>
                <Then>
                    <div>
                        <Spinner fadeIn="none" className={"spinnerColor"} style={this.props.style || { display:'inline-block', marginLeft:10 }} name="line-scale-pulse-out" color="steelblue"/>
                        {
                            this.props.children
                        }
                    </div>
                </Then>
            </If>
        );
    }
}
