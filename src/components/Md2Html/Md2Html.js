import React from 'react'

export default function Md2Html (props) {
  return (
    <div className="markdown-body">
      <link href="//cdn.bootcss.com/github-markdown-css/2.4.1/github-markdown.css" rel="stylesheet" />
      <div dangerouslySetInnerHTML={{ __html: props.html }}>
      </div>
    </div>
  )
}
