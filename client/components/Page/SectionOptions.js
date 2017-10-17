import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SectionOption from './SectionOption';
import { toggleSection } from '../../actions';

const propTypes = {
    sections: PropTypes.arrayOf(PropTypes.shape({})),
    onToggle: PropTypes.func,
};
const defaultProps = {
    sections: [],
    onToggle: () => {},
};

const SectionOptions = ({ sections, onToggle }) => (
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
);

SectionOptions.propTypes = propTypes;
SectionOptions.defaultProps = defaultProps;

const mapStateToProps = state => ({
    sections: state.page.sections,
});

const mapDispatchToProps = dispatch => ({
    onToggle: (section) => {
        console.log(section);
        dispatch(toggleSection(section));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SectionOptions);