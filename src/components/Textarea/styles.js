import styled from 'styled-components';

export const Container = styled.textarea`
   width: 100%;
   height: 15rem;

   background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
   color: ${({theme})=> theme.COLORS.WHITE};

   resize: none;

   margin-bottom: .8rem;
   border-radius: 10px;
   padding: 1.6rem;

   &::placeholder{
      color: ${({theme})=> theme.COLORS.GRAY_300};
   }
`;