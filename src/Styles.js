import styled from "styled-components"

const Styles = styled.div`
  #app {
    width: 100%;
    height: 100%;
    background-color: #383a59;
  }

  a,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  label {
    color: #d863bb !important;
    text-align: center;
  }

  .btn-primary:hover,
  .btn-primary:active,
  .btn-primary:focus,
  .nav-link:hover,
  .nav-link:active,
  .nav-link:focus {
    background-color: #282942 !important;
    color: #d863bb !important;
    border-radius: 20px !important;
    border: none !important;
  }

  .btn-primary,
  .nav-link {
    background-color: #d863bb !important;
    color: #282942 !important;
    border-radius: 20px;
    border: none !important;
  }

  .card {
    border: 1px solid #282943;
  }

  .card-body {
    background-color: #282942;
  }

  .nav-link {
    font-weight: bold;
    margin-left: 6px;
    margin-right: 6px;
  }

  .profile-pic {
    max-width: 300px;
    max-height: 400px;
    width: 100%;
    height: 100%;
  }

  .project-card {
    padding: 16px;
  }

  .projects-note {
    font-size: 16px;
  }

  form {
    padding: 16px;
    border: 1px solid rgba(0, 0, 0, 0.175);
    border-radius: 0.375rem;
    background-color: #282942;
  }

  @media screen and (max-width: 768px) {
    .lets-chat {
      margin-bottom: 3em;
    }
  }
`
export default Styles