import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Accordian from '../../UI/Accordian/Accordian'
import Spinner from '../../UI/Spinner/Spinner'

import * as actions from '../../../store/actions/actions'

import style from './faq.module.css'

function FAQ(props) {
    const { faq, error, isLoading, initFaq } = props

    useEffect(() => {
        if (faq.length === 0) { initFaq() }
    }, [initFaq, faq])
    // Scroll To Top
    useEffect(() => window.scrollTo(0, 0), [])

    const display = faq.map((faqData, index) => <Accordian title={faqData.question} key={index}>
        {faqData.answer}
    </Accordian>)

    return (
        <div className={`container mt-5 pt-4 ${style.Body}`}>
            {error ?
                <div class="alert alert-danger" role="alert">
                    <strong>{error}</strong>
                </div>
                : isLoading ?
                    <Spinner />
                    : display}
        </div>
    )
}

const mapStateToProps = state => ({
    faq: state.faq.faq,
    isLoading: state.faq.isLoading,
    error: state.faq.error
})

const mapDispatchToProps = dispatch => {
    return {
        initFaq: () => dispatch(actions.initFaq())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FAQ)