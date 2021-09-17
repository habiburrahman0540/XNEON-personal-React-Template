import React from 'react';

const SectionTitle = (props) => {
    const {title,description} = props
    return (
        <div className="col-xxl-12 text-center">
        <div className="section-title">
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    </div>
    );
};

export default SectionTitle;