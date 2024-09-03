import React from 'react'
import CpPrivacyPolicy from '../../components/cp-privacy-policy/CpPrivacyPolicy'
import CpPrivacyPolicyBanner from '../../components/common/cp-banner/CpPrivacyPolicyBanner'

const privacyPolicy = () => {
  return (
    <>
        <CpPrivacyPolicyBanner /> 
        <CpPrivacyPolicy />
    </>
  )
}

export default privacyPolicy