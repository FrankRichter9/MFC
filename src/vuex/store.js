import axios from "axios";
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        auth: false,
        offices: [],
        organizations: [],
        users: []
    },
    mutations: {
        SET_AUTH: (state) => {
            state.auth = true;
        },
        SET_OFFICES: (state, data) => {
            state.offices = data
        },
        SET_ORGANIZATIONS: (state, data) => {
            state.organizations = data
        },
        SET_USERS: (state, data) => {
            state.users = data
        },
        ADD_ONE_OFFICE: (state, data) => {
            state.offices.push(data)
        }
    },
    actions: {
        REGISTRATION({commit}, data){
            

            return axios('http://localhost:8000/auth/users/', {
                method: 'POST',
                data
            })
            .then(data => {
                
                return data;
            })
            .catch(error => {
                return error.response.data
            })
        },
        LOGIN({commit}, data){
            

            return axios('http://localhost:8000/auth/jwt/create/', {
                method: 'POST',
                data
            })
            .then(data => {
                if(data.status === 200){
                    commit('SET_AUTH', null)
                }
                return data;
            })
            .catch(error => {
                return error.response.data
            })
        },
        API_OFFICES({commit}){
            

            return axios('http://localhost:8000/offices/', {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(data => {
                console.log(data)
                    commit('SET_OFFICES', data.data)
                    
                
                return data;
            })
            .catch(error => {
                return error.response.data
                
            })
        },
        API_ORGANIZATIONS({commit}){
            

            return axios('http://localhost:8000/organizations/', {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(organizations => {
                
                    
                    
                
                return organizations.data;
            }).then(organizations => {
                axios('http://localhost:8000/organizations_office/', {
                    method: 'GET',
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                })
                .then(offices => {
                        let editOffices = offices.data.map(office => {
                            let obj = office
                            obj.organization = parseInt(office.organization.replace('http://localhost:8000/organizations/', ''))
                            return obj
                        })
                        

                        let editOrganizations = organizations.map(organization => {
                            let editOrganization = organization
                            editOrganization.offices = editOffices.filter(office => office.organization === organization.id)
                            return editOrganization
                        })

                        commit('SET_ORGANIZATIONS', editOrganizations)
                        
                    
                    return offices;
                })
                .catch(error => {
                    return error.response.data
                    
                })
            })
            .catch(error => {
                return error.response.data
                
            })
        },
        API_USERS({commit}){
            

            return axios('http://localhost:8000/users/', {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(data => {
                console.log(data)
                    commit('SET_USERS', data.data)
                    
                
                return data;
            })
            .catch(error => {
                return error.response.data
                
            })
        },
        ADD_OFFICE({commit}, data){

            return axios('http://localhost:8000/offices/', {
                method: 'POST',
                data,
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(data => {
                
                return data;
            })
            .catch(error => {
                return error.response.data
                
            })
        },
        EDIT_OFFICE({commit}, data){
            console.log(data.obj)
            return axios.put('http://localhost:8000/offices/' + data.numb + '/', 
                data.obj,{
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
            }})
            .then(data => {
                
                return data;
            })
            .catch(error => {
                return error.response.data
                
            })
        },
        DELETE_OFFICE({commit}, data){
            console.log(data.obj)
            return axios.delete('http://localhost:8000/offices/' + data.numb + '/', 
                {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
            }})
            .then(data => {
                
                return data;
            })
            .catch(error => {
                return error.response.data
                
            })
        },
        ADD_ONE_OFFICE_ACTION({commit}, data){
            commit('ADD_ONE_OFFICE', data)
        }
    },
    getters: {
        GET_AUTH(state){
            return state.auth
        },
        GET_OFFICES(state){
            return state.offices
        },
        GET_ORGANIZATIONS(state){
            return state.organizations
        },
        GET_USERS(state){
            return state.users
        }
    }
})

export default store;