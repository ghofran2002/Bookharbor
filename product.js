document.addEventListener('DOMContentLoaded', function () {
    const categories = [
        {
            name: "Fiction",
            products: [
                {
                    id: 1,
                    name: "To Kill a Mockingbird",
                    author: "Harper Lee",
                    price: 14.99,
                    imageUrl: "https://whitmorerarebooks.cdn.bibliopolis.com/pictures/1542.jpg?auto=webp&v=1452577731",
                    description: "Harper Lee's Pulitzer Prize-winning novel about racial injustice in the American South."
                },
                {
                    id: 2,
                    name: "Dune",
                    author: "Frank Herbert",
                    price: 18.99,
                    imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1649161732i/32773948._SY540_.jpg",
                    description: "A sci-fi epic about Paul Atreides navigating politics, war, and destiny on the desert planet Arrakis."
                },
                {
                    id: 3,
                    name: "The Hobbit",
                    author: "J.R.R. Tolkien",
                    price: 12.99,
                    imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546071216l/5907.jpg",
                    description: "J.R.R. Tolkien's adventure novel about Bilbo Baggins and his journey to reclaim treasure from a dragon."
                },
                {
                    id: 4,
                    name: "The Girl with the Dragon Tattoo",
                    author: "Stieg Larsson",
                    price: 16.99,
                    imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1622820586i/34594249.jpg",
                    description: "A gripping thriller following journalist Mikael Blomkvist and hacker Lisbeth Salander as they uncover family secrets."
                },
                {
                    id: 5,
                    name: "The Shining",
                    author: "Stephen King",
                    price: 15.99,
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCYVMBXDOXKabnDY38Q2nl2ABd6PCn8CR6Kg&s",
                    description: "Stephen King's horror classic about a haunted hotel and a man descending into madness."
                },
                {
                    id: 6,
                    name: "Pride and Prejudice",
                    author: "Jane Austen",
                    price: 10.99,
                    imageUrl: "https://m.media-amazon.com/images/I/81Scutrtj4L._UF1000,1000_QL80_.jpg",
                    description: "Jane Austen's beloved romance novel about Elizabeth Bennet and Mr. Darcy."
                },
                {
                    id: 7,
                    name: "The Book Thief",
                    author: "Markus Zusak",
                    price: 13.99,
                    imageUrl: "https://m.media-amazon.com/images/I/914cHl9v7oL._AC_UF1000,1000_QL80_.jpg",
                    description: "A story set in Nazi Germany about a young girl who finds solace in stealing and sharing books."
                },
                {
                    id: 8,
                    name: "One Hundred Years of Solitude",
                    author: "Gabriel García Márquez",
                    price: 17.99,
                    imageUrl: "https://m.media-amazon.com/images/I/71WQQjgEhQL.jpg",
                    description: "Gabriel García Márquez's magical realism masterpiece about the Buendía family and the town of Macondo."
                },
                {
                    id: 9,
                    name: "1984",
                    author: "George Orwell",
                    price: 11.99,
                    imageUrl: "https://cdn.kobo.com/book-images/55abfdd4-7e21-4496-a70c-19bca8892bb3/1200/1200/False/NCQNg-qQAT-Z7_F0SBWzjw.jpg",
                    description: "George Orwell’s dystopian novel about a totalitarian regime that controls thought and history."
                },
                {
                    id: 10,
                    name: "Treasure Island",
                    author: "Robert Louis Stevenson",
                    price: 9.99,
                    imageUrl: "https://cdn2.penguin.com.au/covers/400/9780241733790.jpg",
                    description: "Robert Louis Stevenson's swashbuckling adventure about pirates and hidden treasure."
                }
            ]
        },
        {
            name: "Non-Fiction",
            products: [
                {
                    id: 11,
                    name: "The Diary of a Young Girl",
                    author: "Anne Frank",
                    price: 12.99,
                    imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1560816565i/48855.jpg",
                    description: "Anne Frank's moving real-life diary written while hiding from the Nazis."
                },
                {
                    id: 12,
                    name: "Atomic Habits",
                    author: "James Clear",
                    price: 19.99,
                    imageUrl: "https://target.scene7.com/is/image/Target/GUEST_0035cc74-7206-485d-aa04-83b3b7cf8db7?wid=800&hei=800&qlt=80&fmt=webp",
                    description: "James Clear's self-help book about the power of small habits to create big change."
                },
                {
                    id: 13,
                    name: "Sapiens: A Brief History of Humankind",
                    author: "Yuval Noah Harari",
                    price: 20.99,
                    imageUrl: "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF894,1000_QL80_.jpg",
                    description: "Yuval Noah Harari’s exploration of human history from the Stone Age to modern times."
                },
                {
                    id: 14,
                    name: "A Brief History of Time",
                    author: "Stephen Hawking",
                    price: 18.99,
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjWKiMog3eF2GocsQG6hgBKQIXW19FGvuCmw&s",
                    description: "Stephen Hawking's accessible introduction to black holes, time, and the universe."
                },
                {
                    id: 15,
                    name: "Meditations",
                    author: "Marcus Aurelius",
                    price: 14.99,
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTteBgP50LLVx7AJ9Uv90e6IZ_X5TB6cCdECw&s",
                    description: "Philosophical reflections from Roman Emperor Marcus Aurelius on life and virtue."
                },
                {
                    id: 16,
                    name: "Rich Dad Poor Dad",
                    author: "Robert Kiyosaki",
                    price: 15.99,
                    imageUrl: "https://m.media-amazon.com/images/I/81N9xAIkohL.jpg",
                    description: "Robert Kiyosaki’s guide to financial literacy and wealth-building mindsets."
                },
                {
                    id: 17,
                    name: "The Art of War",
                    author: "Sun Tzu",
                    price: 10.99,
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6U323KzK6It-C5NVp3Bzse2DugcKPzpRLXA&s",
                    description: "Sun Tzu’s ancient military strategy guide, applicable to business and life."
                },
                {
                    id: 18,
                    name: "In Cold Blood",
                    author: "Truman Capote",
                    price: 17.99,
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl8KhnCEduAo2ob1wy9kWpncJYjOV1z81ECg&s",
                    description: "Truman Capote’s true-crime classic about a brutal murder in Kansas."
                },
                {
                    id: 19,
                    name: "The 4-Hour Body",
                    author: "Tim Ferriss",
                    price: 21.99,
                    imageUrl: "https://m.media-amazon.com/images/I/61PvTGTRS2L.jpg",
                    description: "Tim Ferriss's unconventional guide to health, fitness, and body transformation."
                },
                {
                    id: 20,
                    name: "Man’s Search for Meaning",
                    author: "Viktor E. Frankl",
                    price: 13.99,
                    imageUrl: "https://m.media-amazon.com/images/I/819Pl1nP0ZL.jpg",
                    description: "Viktor E. Frankl’s memoir on finding purpose and resilience through suffering."
                }
            ]
        }
    ];
    
    

    const productCategories = document.getElementById("productCategories");

    categories.forEach((category) => {
        const categoryDiv = document.createElement("div");
        categoryDiv.className = "product-category";

        const categoryTitle = document.createElement("h2");
        categoryTitle.textContent = category.name;
        categoryDiv.appendChild(categoryTitle);

        const productRow = document.createElement("div");
        productRow.className = "product-row";

        category.products.forEach((product) => {
            const productItem = document.createElement("div");
            productItem.className = "product-item";

            const productImage = document.createElement("img");
            productImage.src = product.imageUrl;
            productImage.alt = product.name;
            productItem.appendChild(productImage);

            const productName = document.createElement("h3");
            productName.textContent = product.name;
            productItem.appendChild(productName);

            const productPrice = document.createElement("p");
            productPrice.textContent = `$${product.price.toFixed(2)}`;
            productItem.appendChild(productPrice);

            const addToCartButton = document.createElement("button");
            addToCartButton.textContent = "Add to Cart";
            addToCartButton.addEventListener("click", () => window.addToCart(product));
            productItem.appendChild(addToCartButton);

            const viewDetailsButton = document.createElement("button");
            viewDetailsButton.textContent = "View Details";
            viewDetailsButton.addEventListener("click", () => goToDetails(product));
            productItem.appendChild(viewDetailsButton);

            productRow.appendChild(productItem);
        });

        categoryDiv.appendChild(productRow);
        productCategories.appendChild(categoryDiv);
    });

    function goToDetails(product) {
        const queryParams = new URLSearchParams({
            id: product.id,
            name: product.name,
            author: product.author, // Added author field
            price: product.price,
            imageUrl: product.imageUrl,
            description: product.description,
        });
        window.location.href = `product-details.html?${queryParams.toString()}`;
    }
    // Exemple de produits à ajouter au panier
const productsToAdd = [
    {
        id: 1,
        name: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 14.99,
        imageUrl: "https://whitmorerarebooks.cdn.bibliopolis.com/pictures/1542.jpg?auto=webp&v=1452577731",
        description: "Harper Lee's Pulitzer Prize-winning novel about racial injustice in the American South."
    },
    {
        id: 2,
        name: "Dune",
        author: "Frank Herbert",
        price: 18.99,
        imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1649161732i/32773948._SY540_.jpg",
        description: "A sci-fi epic about Paul Atreides navigating politics, war, and destiny on the desert planet Arrakis."
    },
    {
        id: 12,
        name: "Atomic Habits",
        author: "James Clear",
        price: 19.99,
        imageUrl: "https://target.scene7.com/is/image/Target/GUEST_0035cc74-7206-485d-aa04-83b3b7cf8db7?wid=800&hei=800&qlt=80&fmt=webp",
        description: "James Clear's self-help book about the power of small habits to create big change."
    }
];

// Ajouter chaque produit au panier
productsToAdd.forEach(product => {
    window.addToCart(product);
});
});