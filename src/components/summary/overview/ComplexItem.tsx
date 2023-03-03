import React from 'react'

const ComplexItem = ({url, title, comments, like, share}) => {  
  return (
      <div className="complex-item">        
        <div className="item-image">
          <img src={url}/>
        </div>
        <div className="item-title">
          <div className="title">{title}</div>
          <div className="item-property">
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M2.50304 10.381C2.50405 11.0271 3.00855 11.5501 3.62987 11.5491C3.87796 11.5486 4.11895 11.463 4.31535 11.3053L6.21126 9.7837H9.75C10.7855 9.7837 11.625 8.91066 11.625 7.8337V2.86016C11.625 1.7832 10.7855 0.910156 9.75 0.910156H2.25C1.21447 0.910156 0.375 1.7832 0.375 2.86016V7.8337C0.375 8.91066 1.21447 9.7837 2.25 9.7837H2.5021L2.50304 10.381ZM3.75108 9.13264C3.75052 8.77407 3.47086 8.4837 3.12608 8.4837H2.25C1.90482 8.4837 1.625 8.19268 1.625 7.8337V2.86016C1.625 2.50117 1.90482 2.21016 2.25 2.21016H9.75C10.0952 2.21016 10.375 2.50117 10.375 2.86016V7.8337C10.375 8.19268 10.0952 8.4837 9.75 8.4837H5.98905C5.81165 8.4837 5.65592 8.55887 5.54422 8.67696L3.75262 10.1149L3.75108 9.13264Z" fill="#92929D"/>
            </svg>&nbsp;&nbsp;
            {comments}&nbsp;&nbsp;&nbsp;&nbsp;
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.29356 3.91611C10.2355 3.02019 10.2355 1.56186 9.29356 0.665945C8.36005 -0.221982 6.85308 -0.221982 5.91957 0.665945L5.39825 1.1618C5.18012 1.36929 4.81988 1.36929 4.60175 1.1618L4.08043 0.665945C3.14692 -0.221982 1.63995 -0.221982 0.706438 0.665945C-0.235479 1.56186 -0.235479 3.02019 0.706438 3.91611L5 8L9.29356 3.91611Z" fill="#808191"/>
            </svg>&nbsp;&nbsp;
            {like}&nbsp;&nbsp;&nbsp;&nbsp;
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 5C0 4.08111 0.791765 3.33333 1.76471 3.33333C2.23176 3.33333 2.65412 3.50833 2.97 3.78889L6.49412 1.88667C6.48353 1.81444 6.47059 1.74222 6.47059 1.66667C6.47059 0.747777 7.26235 0 8.23529 0C9.20824 0 10 0.747777 10 1.66667C10 2.58556 9.20824 3.33333 8.23529 3.33333C7.76824 3.33333 7.34588 3.15833 7.03 2.87778L3.50588 4.77944C3.51647 4.85222 3.52941 4.92444 3.52941 5C3.52941 5.07556 3.51647 5.14778 3.50588 5.22056L7.03 7.12222C7.34588 6.84167 7.76824 6.66667 8.23529 6.66667C9.20824 6.66667 10 7.41444 10 8.33333C10 9.25222 9.20824 10 8.23529 10C7.26235 10 6.47059 9.25222 6.47059 8.33333C6.47059 8.25778 6.48353 8.18556 6.49412 8.11278L2.97 6.21111C2.64471 6.50296 2.21337 6.66598 1.76471 6.66667C0.791765 6.66667 0 5.91889 0 5Z" fill="#808191"/>
            </svg>&nbsp;&nbsp;
            {share}
          </div>
        </div>
      </div>
  )
}
export default ComplexItem