import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { PageHeaderSection } from './sections/header/PageHeaderSection'
import AddSkillsSection from './sections/skills/AddSkillsSection'
import api from '../../../api/api'
import { SkillsListSection } from './sections/skills/SkillsListSection'
import SpinLoader from '../../UI/atoms/SpinLoader/SpinLoader'

/***
 * @description - Home Page of the application
 *
 * @returns {JSX} - Returns the HomePage
 */
const HomePage = () => {
  const [skills, getSkills] = useState([])
  const [name, getName] = useState('')
  const [isError, setError] = useState(false)
  const [experience, getExperience] = useState('')

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
    [skills]
  )

  const addSkill = () => {
    if (!name || name.length < 4) {
      setError(true)
      return
    }
    api.addSkillsToApi({
      name,
      experience,
    })
    getName('')
  }

  const deleteSkill = id => {
    api.deleteSkill(id)
  }

  const onChange = e => {
    setError(false)
    getName(e.target.value)
  }

  const onSelectedChange = e => {
    getExperience(e.target.value)
  }

  return (
    <HomePage.Container>
      <PageHeaderSection />
      <AddSkillsSection
        name={name}
        onSelectedChange={onSelectedChange}
        onChange={onChange}
        isError={isError}
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
