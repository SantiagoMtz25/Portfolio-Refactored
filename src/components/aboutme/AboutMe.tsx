import './AboutMe.css'

const AboutMe = () => {
  return (
    <>
      <main className="about-me">
        <aside className="description">
          <div className="code-container">
            <pre className="code-line"><span className="keyword">class</span> SantiagoMartinezVallejo &#123;</pre>
            <pre className="code-line">    skill: <span className="keyword">string</span>;</pre>
            <pre className="code-line"> </pre>
            <pre className="code-line">    <span className="keyword">constructor</span>(message: <span className="keyword">string</span>) &#123;</pre>
            <pre className="code-line">        <span className="keyword">this</span>.skill = message;</pre>
            <pre className="code-line">    &#125;</pre>
            <pre className="code-line"> </pre>
            <pre className="code-line">    introduceMyself() &#123;</pre>
            <pre className="code-line">        <span className="keyword">return</span> <span className="string">"Hello, "</span> + <span className="keyword">this</span>.skill;</pre>
            <pre className="code-line">    &#125;</pre>
            <pre className="code-line">&#125;</pre>
            <pre className="code-line"></pre>
            <pre className="code-line">let newMe = <span className="keyword">new</span> SantiagoMartinezVallejo(<span className="string">"Fullstack Developer"</span>);</pre>
            <pre className="code-line">newMe.introduceMyself();</pre>
          </div>
        </aside>
        <section className="profile-picture">
          <div></div>
          <div className='image-border'></div>
          <img src='src\assets\yoyo2.jpeg' alt='profile picture' />
        </section>
      </main>
      <img className='wave' src='src\assets\wave (1).svg' alt='wave' />
    </>
  );
}

export default AboutMe;