import PropTypes from 'prop-types';
import './Devider.css'

export default   function  Devider({className,dashed,orientation,type}){


    return <div className={[className,`ki-devider`,dashed ?'dashed':'']}>
         测试
    </div>
}


Devider.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
     className: PropTypes.string,
     
     dashed:PropTypes.bool
}