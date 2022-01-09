import React from 'react'
import InstagramFeed from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'
import './style.scss'

const PostInstagram = () => {
    return (
        <div className='instagram'>
            <div className='instagram__texts'>
                <h2>Siga-nos no Instagram</h2>
                <p>E acompanhe as novidades!</p>
            </div>
            <InstagramFeed token="IGQVJYdUg0eHRYMERhek1veVBPblczNnl5MDZAXRnRnMUE0ZA01SMDViNUZAmdlFjMnZA1eE96TVh2VlU3V2F6VENEaFloYkR6bnVXMlNDdGx1QWxuVUVqQXdMUkdyYnRucDNYY09HMjl2aWowMFItcXhTZAAZDZD" counter="6" />
        </div>
    )
}

export default PostInstagram