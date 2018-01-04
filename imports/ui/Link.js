import {Meteor} from 'meteor/meteor';
import React from 'react';
import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinksListFilters from './LinksListFilters';
export default class Link extends React.Component {
    componentWillMount() {
        this.onEnterPrivatePage(this.props);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
            this.onEnterPrivatePage(nextProps);
        }
    }
    onEnterPrivatePage(props) {
        if (!Meteor.userId()) {
            props
                .history
                .replace('/');
        }
    }
    render() {
        return (
            <div>
                <PrivateHeader title="Your Links"/>
                <div className="page-content">
                    <AddLink/>
                    <LinksListFilters />
                    <LinksList/>
                </div>
            </div>
        );
    }
}