import React, { useState, useEffect } from 'react';
import './style.scss'

const ArticleLeft = () => {
    const [width, setWidth] = useState(undefined)

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <article className='article-left'>
            <div className='article-left__text-area'>
                <h2 className='text-area__title'>Lorem ipsum dolor sit</h2>
                <p className='text-area__text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum consectetur, nam dolore accusamus error facilis voluptatibus sint maiores praesentium natus non quaerat fugit saepe exercitationem, impedit fugiat illo tempora adipisci.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sunt cumque porro facere quo et dicta facilis ipsam, dolor, deleniti delectus sapiente perferendis molestias rem veniam? Quaerat nulla architecto eveniet?
                </p>
                <button className='text-area__button'>Ver mais</button>
            </div>
            <div className='article-left__img-area'>
                {width < 1024 ? 
                    <img src="https://via.placeholder.com/320x400" alt="imagem" />
                    :
                    <img src="https://via.placeholder.com/600x500" alt="imagem" />
                }
            </div>
        </article>
    )
}
export default ArticleLeft