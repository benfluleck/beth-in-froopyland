import { useReducer } from 'react'

export function useSkillReducer () {
  const initialSkillState = {
    name: '',
    errorMessage: null,
    experience: '',
  }

  const [state, dispatchSkillState] = useReducer(
    skillReducer,
    initialSkillState,
  )

  return {
    ...state,
    dispatchSkillState,
  }
}

function skillReducer (state, action) {
  switch (action.type) {
    case 'SET_NAME': {
      return {
        ...state,
        errorMessage: null,
        name: action.name,
      }
    }
    case 'INITIALIZE': {
      return {
        errorMessage: null,
        name: '',
        experience: '',
      }
    }

    case 'SET_EXPERIENCE': {
      return {
        ...state,
        errorMessage: null,
        experience: action.experience,
      }
    }

    case 'SET_ERROR_MESSAGE': {
      return {
        ...state,
        errorMessage: action.errorMessage,
      }
    }
    default:
      return state
  }
}
