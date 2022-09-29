import styled from 'styled-components'
import { PageHeader } from '../components'
import aboutImg from '../assets/header-bcg.jpg'

const AboutPage = () => {
  return (
    <main>
      <PageHeader title='about'/>
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='desk' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            voluptatum, quibusdam, quod, voluptas quidem voluptatem necessitatibus
            quae repellendus iure quas architecto. Quisquam, voluptas? Quae
            voluptas, quidem doloremque quibusdam voluptatum quas.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;

  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin: 2rem auto 0;
    color: var(--clr-grey-5);
  }

  .title {
    text-align: left;
  }

  .underline {
    margin-left: 0;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
