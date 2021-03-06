import React from 'react';

const styles = {
  title: {
    color: 'snow'
  },
  iconItem: {
    color: 'rgba(220, 171, 107, 1)'
  },
  Prime: {
    margin: 0,
  }
}

function MediaContent() {

  return (
    <div className='columns' style={styles.Prime}>
      <div className='column is-one-fourth'>
        <div className='tile'>
          <article className='media'>
            <div className='media-content'>
              <div className='content'>
                <p style={styles.title}>
                  <strong style={styles.title}> Richard Kessler </strong> <small> @richardkessler </small>
                  <br></br>
                    I love going to La Cucina Italiana. Great food and the staff is friendly and keep the establishment very clean.
                  </p>
              </div>
              <nav className='level is-mobile'>
                <div className='level-left'>
                  <a href='bulma-stuff' className='level-item'>
                    <span className='icon is-small' style={styles.iconItem}><i className='fas fa-reply'></i></span>
                  </a>
                  <a href='bulma-stuff' className='level-item'>
                    <span className='icon is-small' style={styles.iconItem}><i className='fas fa-heart'></i></span>
                  </a>
                </div>
              </nav>
            </div>
            <div className='media-right'>
              <button className='delete'></button>
            </div>
          </article>
        </div>
      </div>
      <div className='column is-one-fourth'>
        <div className='tile'>
          <article className='media'>
            <div className='media-content'>
              <div className='content'>
                <p style={styles.title}>
                  <strong style={styles.title}> Eddie Saunders </strong> <small> @eddiesaunders </small>
                  <br></br>
                    For some really good ice cream you have to check out Sunni Sky's Homemade Ice Cream.
                  </p>
              </div>
              <nav className='level is-mobile'>
                <div className='level-left'>
                  <a href='bulma-stuff' className='level-item'>
                    <span className='icon is-small' style={styles.iconItem}><i className='fas fa-reply'></i></span>
                  </a>
                  
                  <a href='bulma-stuff' className='level-item'>
                    <span className='icon is-small' style={styles.iconItem}><i className='fas fa-heart'></i></span>
                  </a>
                </div>
              </nav>
            </div>
            <div className='media-right'>
              <button className='delete'></button>
            </div>
          </article>


        </div>
      </div>
      <div className='column is-one-fourth'>
        <div className='tile'>
          <article className='media'>
            <div className='media-content'>
              <div className='content'>
                <p style={styles.title}>
                  <strong style={styles.title}> Jason Vernot </strong> <small> @jasonvernot </small>
                  <br></br>
                    If you are looking for some amazing food then you have to checkout Gothams in downtown Smithfield! Some of the best subs I have had.
                  </p>
              </div>
              <nav className='level is-mobile'>
                <div className='level-left'>
                  <a href='bulma-stuff' className='level-item'>
                    <span className='icon is-small' style={styles.iconItem}><i className='fas fa-reply'></i></span>
                  </a>
                  <a href='bulma-stuff' className='level-item'>
                    <span className='icon is-small' style={styles.iconItem}><i className='fas fa-heart'></i></span>
                  </a>
                </div>
              </nav>
            </div>
            <div className='media-right'>
              <button className='delete'></button>
            </div>
          </article>

        </div>
      </div>
      <div className='column is-one-fourth'>
        <div className='tile'>
          <article className='media'>
            <div className='media-content'>
              <div className='content'>
                <p style={styles.title}>
                  <strong style={styles.title}> Tevin  </strong> <small> @tevin </small>
                  <br></br>
                    For some great D&D campaigns you have to go to Event Horizon Games.  Take your adventuring to the next level.
                  </p>
              </div>
              <nav className='level is-mobile'>
                <div className='level-left'>
                  <a href='bulma-stuff' className='level-item'>
                    <span className='icon is-small' style={styles.iconItem}><i className='fas fa-reply'></i></span>
                  </a>
                  <a href='bulma-stuff' className='level-item'>
                    <span className='icon is-small' style={styles.iconItem}><i className='fas fa-heart'></i></span>
                  </a>
                </div>
              </nav>
            </div>
            <div className='media-right'>
              <button className='delete'></button>
            </div>
          </article>

        </div>
      </div>

    </div>
  )
}

export default MediaContent;