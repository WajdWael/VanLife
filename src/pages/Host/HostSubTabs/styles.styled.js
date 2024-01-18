import styled from "styled-components"
import COLORS from "../../../styles/colors"

export const DashboardSection = styled.section`
  .flex{
    display: flex;
    align-items: center;
    gap: 4rem;
    padding: 2rem;
    border-radius: 2rem;
  }
  .bgOrange{
    background-color: ${COLORS.dark_secondary_orange};
  }
  a{
    font-size: 1.25rem;
    font-weight: 600;
    color: ${COLORS.main_gray};
  }
  h1{
    font-size: 3.5rem;
    font-weight: 700;
    color: #161616;
  }
  p{
    margin: 7px 3px;
    font-size: 22px;
    font-weight: 500;
    span{
      font-weight: 800;
      text-decoration: underline;
    }
  }

  h2{
    font-size: 2rem;
    font-weight: 700;
    color: #161616;
  }

  .host-dashboard-host{
    background: rgba(255, 234, 208, 1);
    gap: 0.4rem;

    .star{
      font-size: 2rem;
      color: orange;
      margin: 0 0 0 8px;
    }

    p{
      margin: 0 0 0 2rem;
      span{
        text-decoration: none;
        font-weight: 900;
        color: ${COLORS.primary_black};
      }
    }

    a{
      margin-left: 3rem;
    }
  }

  .top{
    justify-content: space-between;
    width: 100%;
  }

  
  @media (max-width: 768px) {
    p,span,h1,h2,h3,a, .host-dashboard-host .star{
      font-size: 1rem;
    }
  }


`
export const IncomeStyle = styled.section`
  h1{
    font-size: 3rem;
    text-align: center;
    color: #161616;
    font-weight: 800;
  }

  h2{
    text-align: center;
    font-size: 2rem;
    font-weight: 800;
    color: ${COLORS.primary_black};
  }

  p{
    text-align: center;
    font-size: 22px;
    font-weight: 500;
    margin: 8px 0;
    @media (max-width: 768px) {
      font-size: 1rem;
    }

    span{
      font-weight: 800;
      text-decoration: underline;
    }
  }

  img{
    max-width: 495px;
    margin: 4rem auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .info-header{
    h3{
      text-align: center;
      color: ${COLORS.primary_black};
      font-size: 2rem;
      font-weight: 800;
    }
  }

  .transactions{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin: 2rem 0 5rem 0;

    .transaction{
      max-width: 780px;
      background: ${COLORS.white};
      padding: 1rem;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      font-weight: 800;
      margin-bottom: 0.5rem;

      h3{
        text-align: center;
        font-size: 24px;
        color: ${COLORS.primary_black};
      }

      p{
        text-align: center;
        font-size: 18px;
        color: ${COLORS.main_gray};
      }
    }
  }
`
export const ReviewsStyles = styled.section`
  padding: 1rem;

  .top-text{
    text-align: center;
    font-weight: 500;
    display: flex;
    font-size: 22px;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    /* max-width: 820px; */
    h1{
      font-size: 3rem;
      font-weight: 800;
      color: ${COLORS.primary_black};
    }
    p{
      margin-top:5px;
      span{
        font-weight: 700;
        text-decoration: underline;
      }
    }
  }

  img{
    max-width: 495px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem auto;
  }

  .info-header{
    max-width: 870px;
    margin: 0 auto;
    h3{
      font-weight: 800;
      font-size: 2rem;
      color: ${COLORS.primary_black};
    }
  }

  .reviews{
    width: 100%;
    max-width: 870px;
    margin: 2rem auto 5rem;

    .review{
      padding: 0.5rem;
      font-size: 20px;
      font-weight: 500;
      .rate{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        .star{
          color: orange;
          font-size: 23px;
        }
      }
    }

    .info{
      display: flex;
      align-items: center;
      gap: 2rem;
      margin: 1rem 0 1.75rem 0;
      font-size: 22px;
      .name{
        font-weight: 800;
        color: ${COLORS.primary_black};
      }
      .date{
        color: ${COLORS.light_gray}
      }
    }

    p{
      margin-bottom: 1.25rem;
    }
  }

  hr{
    margin-bottom: 3rem;
  }
`