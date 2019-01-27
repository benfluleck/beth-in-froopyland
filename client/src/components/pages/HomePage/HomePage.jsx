import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { PageHeaderSection } from './sections/header/PageHeaderSection'
import AddSkillsSection from './sections/skills/AddSkillsSection'
import api from '../../../api/api'
import { SkillsListSection } from './sections/skills/SkillsListSection'
import SpinLoader from '../../UI/atoms/SpinLoader/SpinLoader'
import { useSkillReducer } from './hooks/useSkill'

/***
 * @description - Home Page of the application
 *
 * @returns {JSX} - Returns the HomePage
 */
const HomePage = () => {
  const [skills, getSkills] = useState([])
  const { name, experience, errorMessage, dispatchSkillState } = useSkillReducer()

  /**
   * @description - useEffect executes on
   * mount and update lifecycle methods to
   * get the Skills list
   */
  useEffect(
    () => {
      api
        .getSkillsFromApi()
        .then(response => getSkills(response.data))
        .catch(err => console.log(err))
    },
    [skills.length]
  )

  const addSkill = () => {
    if (!name || name.length <= 4 || name.length > 255) {
      dispatchSkillState({
        type: 'SET_ERROR_MESSAGE',
        errorMessage: 'Please Enter a Topic of more than 4 charactes',
      })
      return
    }

    if (experience === 'Experience' || !experience) {
      dispatchSkillState({
        type: 'SET_ERROR_MESSAGE',
        errorMessage: 'Please Select an Experience level',
      })
      return
    }

    api.addSkillsToApi({
      name,
      experience,
    })
    dispatchSkillState({ type: 'INITIALIZE' })
  }

  const deleteSkill = id => {
    api.deleteSkill(id)
  }

  const onChange = e => {
    const name = e.target.value
    dispatchSkillState({ type: 'SET_NAME', name })
  }

  const onSelectedChange = e => {
    const experience = e.target.value
    dispatchSkillState({ type: 'SET_EXPERIENCE', experience })
  }

  return (
    <HomePage.Container>
      <PageHeaderSection />
      <AddSkillsSection
        name={name}
        onSelectedChange={onSelectedChange}
        onChange={onChange}
        showError={!name || name.length < 4 || Boolean(errorMessage)}
        errorMessage={errorMessage}
        addSkill={addSkill}
      />
      {skills.length ? (
        <SkillsListSection deleteSkill={deleteSkill} cards={skills} />
      ) : (
        <SpinLoader />
      )}
    </HomePage.Container>
  )
}

HomePage.Container = styled.div`
  display: flex;
  min-height: 100vh;
  padding: 100px 40px;
  flex-flow: column nowrap;
`

export default HomePage
