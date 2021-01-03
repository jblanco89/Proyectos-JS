// Objetc Oriented Programming with Vanilla JS 
// Javier Blanco 

//alert("it works!");

/* two classes will be developed and they will be interacting each other
 1 UI classs: User Interface linked with save button
 2 Product class: evolved for product's name, price and year items */

class Product {
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
}
// Accessing to DOM with UI class
class UI {
    addProduct(product){
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
        <div class = "card card border-success text-center mb-4">
            <div class= "card-body">
                <strong> Product Name</strong>: ${product.name}
                <strong> Product Price</strong>: ${product.price}
                <strong> Product Year</strong>: ${product.year}
                <a href="#" class ="btn btn-success">Edit</a>
                <a href="#" class ="btn btn-danger" name ="delete">Delete</a>
            </div>
        </div>
        `;
        productList.appendChild(element);
    }

    resetForm(){
        document.getElementById('product-form').reset();
    }

    deleteProduct(element){
        if (element.name === "delete") {
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Product deleted completely','danger');   
        } 

    }
    showMessage(message, cssClass){
        const div  = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));

        // DOM Message

        const container = document.querySelector('.container');
        const app = document.querySelector('#app');
        container.insertBefore(div, app);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000)


    }
}

// Configuring DOM Events

const form  = document.getElementById('product-form');
form.addEventListener('submit',function(e){
    //alert('Trying');
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    const product = new Product (name, price, year);
    const ui = new UI();
    if (name === '' || price === '' || year === '') {
        return ui.showMessage('Complete all fields, please!', 'warning');
    }
    ui.addProduct(product);
    ui.resetForm();
    ui.showMessage('Product added successfuly', 'success');



    e.preventDefault();

});

document.getElementById('product-list').addEventListener('click',function(e){
    const ui =  new UI();
    ui.deleteProduct(e.target)

})