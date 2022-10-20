import styled from 'styled-components';


const FilterTagWrap = styled.div`
    background-color: var(--color-filter-tablets);
    display: flex;
    border-radius: .5rem;
    overflow: hidden;
    box-shadow: 2px 2px 5px rgba(0,0,0, .2);
` 
const FilterTagName = styled.div`
    padding: .6rem;
    outline: 1px solid red;
    color: var(--color-primary-cyan);
`

const RemoveButton = styled.button`
        background-color: var(--color-primary-cyan);
        padding: .6rem;
        transition: background-color .25s;
        
        & img{
            vertical-align: middle;
        }

        &:hover{
            background-color: var(--color-cyan-darker);
        }
`


export {FilterTagWrap, FilterTagName, RemoveButton }