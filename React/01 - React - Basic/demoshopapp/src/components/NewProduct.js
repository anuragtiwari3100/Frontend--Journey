import './NewProduct.css'
import ProductForm from './ProductForm';

function NewProduct(props) {

    function sacveProduct(){
         console.log("i am inside  new Porduct");
         console.log(product);
         //calling parent function

         props.pranay(product);

    }

    return (<div className='new-product'>
        <ProductForm onSaveProduct = {sacveProduct}/>
    </div>)
}

export default NewProduct;