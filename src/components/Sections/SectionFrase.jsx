import React from 'react'
import styled from "styled-components"

function SectionFrase({frase}) {
  return (
    <ContainerFrase>
        <div className='Frase'>
          <h1>"{frase}"</h1>
        </div>
    </ContainerFrase>
  )
}

export default SectionFrase
const ContainerFrase=styled.div`
display: flex;
justify-content: center;
.Frase{
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
}
.Frase > h1{
    color: white;
    font-size: 80px;
    font-family: 'Lobster';
    text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
    text-align: center;

}

`;