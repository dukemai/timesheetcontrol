import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SectionOption from './SectionOption';
import { toggleSection } from '../../actions';

const propTypes = {
    sections: PropTypes.arrayOf(PropTypes.shape({})),
    onToggle: PropTypes.func,
    totalReadingArticles: PropTypes.number,
};
const defaultProps = {
    sections: [],
    onToggle: () => {},
    totalReadingArticles: 0,
};

const SectionOptions = ({ sections, onToggle, totalReadingArticles }) => (
    <div className="sections-bar">
        <ul className="sections is-clearfix">
            {
                sections.map((section) => (
                    <SectionOption
                        key={section.title}
                        title={section.title}
                        isEnabled={section.select}
                        onToggle={() => onToggle(section)}
                    />
                ))
            }  
        </ul>
        <span className="tag is-success total-articles">
            {totalReadingArticles} i kö
        </span>    
    </div>
);

SectionOptions.propTypes = propTypes;
SectionOptions.defaultProps = defaultProps;

const mapStateToProps = state => ({
    sections: state.page.sections,
    totalReadingArticles: state.page.readingArticles.length,
});

const mapDispatchToProps = dispatch => ({
    onToggle: (section) => {
        dispatch(toggleSection(section));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SectionOptions);