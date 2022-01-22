import './GoToTop.css'

const GoToTop = () => {

    const goToTop = () => {
        const timer = setInterval(() => {
            document.documentElement.scrollTop -= 30;
            if(document.documentElement.scrollTop <= 0) {
                clearInterval(timer)
            }
        }, 10)
    }

    return  (
        <div>
            <span className='gototop' onClick={goToTop}><i className="fas fa-angle-double-up"></i></span>
        </div>
    )
}

export default GoToTop