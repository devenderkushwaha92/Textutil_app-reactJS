import React from 'react'

export default function Alerts(props) {
  console.log(props)
 
  return (
    <div>
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{props.alertType}</strong> {props.alertText}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    </div>
  )
}
