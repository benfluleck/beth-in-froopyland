import axios from 'axios'

export default {
  getSkillsFromApi: () => axios.get('/skills'),
  addSkillsToApi: (name, experience) => axios.post('/skills', name, experience),
  deleteSkill: id => axios.delete(`/skills/${id}`),
}
