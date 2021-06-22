import React, { FunctionComponent } from 'react';
import { graphql, Link } from 'gatsby';

interface InfoPageProps {
    data: {
        site: {
            siteMetadata: {
                title: string;
                description: string;
                author: string;
            };
        };
    };
}

const InfoPage: FunctionComponent<InfoPageProps> = props => {
    return (
        <div>
            {props.data.site.siteMetadata.title}
            {props.data.site.siteMetadata.description}
            {props.data.site.siteMetadata.author}
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default InfoPage;

export const metadataQuery = graphql`
    {
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`;
