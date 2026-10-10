// FORME Menswear — illustrative catalogue. Replace sample products/prices with verified store details.
const WHATSAPP_NUMBER = "918319738399"; // Country code included; digits only.
const SAMPLE_LABEL = "Sample price — confirm with store";
const categories = [
  {name:"Jeans", image:"https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=80"},
  {name:"Shirts", image:"https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=700&q=80"},
  {name:"T-Shirts", image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80"},
  {name:"Lowers", image:"https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=700&q=80"},
  {name:"Hoodies", image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=80"},
  {name:"Uppers", image:"https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80"},
  {name:"Track Suits", image:"https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=700&q=80"},
  {name:"Jackets", image:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=80"},
  {name:"Caps", image:"https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=700&q=80"},
  {name:"Mufflers", image:"https://images.unsplash.com/photo-1609803384069-19f3e5a70e75?auto=format&fit=crop&w=700&q=80"}
];
const products = [
  {id:1,name:"Everyday Denim Jeans",category:"Jeans",price:799,image:categories[0].image},
  {id:2,name:"Casual Button-Down Shirt",category:"Shirts",price:599,image:categories[1].image},
  {id:3,name:"Classic Cotton T-Shirt",category:"T-Shirts",price:399,image:categories[2].image},
  {id:4,name:"Comfort Fit Lower",category:"Lowers",price:499,image:categories[3].image},
  {id:5,name:"Everyday Hoodie",category:"Hoodies",price:799,image:categories[4].image},
  {id:6,name:"Casual Upper",category:"Uppers",price:699,image:categories[5].image},
  {id:7,name:"Track Suit Set",category:"Track Suits",price:999,image:categories[6].image},
  {id:8,name:"Casual Jacket",category:"Jackets",price:1199,image:categories[7].image},
  {id:9,name:"Everyday Cap",category:"Caps",price:199,image:categories[8].image},
  {id:10,name:"Winter Muffler",category:"Mufflers",price:249,image:categories[9].image}
];
let activeCategory = "All";
let cart = [];
const $ = (s) => document.querySelector(s);
const money = (n) => "₹" + Number(n).toLocaleString("en-IN");
function waUrl(message){ return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`; }
function openWhatsApp(message){ window.open(waUrl(message), "_blank", "noopener,noreferrer"); }
function showToast(message){ const t=$("#toast");t.textContent=message;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200); }
function renderCategories(){
  $("#categoryGrid").innerHTML = categories.map(c=>`<a class="category-card" href="#products" data-category="${c.name}"><img loading="lazy" src="${c.image}" alt="${c.name} clothing" onerror="this.style.opacity='.25'"><span>${c.name} ↗</span></a>`).join("");
  $("#categoryGrid").querySelectorAll("[data-category]").forEach(el=>el.addEventListener("click",()=>setCategory(el.dataset.category)));
}
function renderFilters(){
  const names=["All",...categories.map(c=>c.name)];
  $("#filters").innerHTML=names.map(n=>`<button class="filter-chip ${activeCategory===n?"active":""}" data-filter="${n}">${n}</button>`).join("");
  $("#filters").querySelectorAll("[data-filter]").forEach(b=>b.addEventListener("click",()=>setCategory(b.dataset.filter)));
}
function setCategory(name){activeCategory=name;$("#productsHeading").textContent=name==="All"?"Popular picks":name;renderFilters();renderProducts();$("#products").scrollIntoView({behavior:"smooth"});}
function productCard(p){
  return `<article class="product-card"><div class="product-image-wrap"><img class="product-image" loading="lazy" src="${p.image}" alt="${p.name}" onerror="this.style.opacity='.25'"><span class="sample-tag">SAMPLE PRICE</span></div><div class="product-info"><div class="product-category">${p.category}</div><h3 class="product-name">${p.name}</h3><div class="product-price">${money(p.price)}<small>${SAMPLE_LABEL}</small></div><div class="product-actions"><button class="add-button" data-add="${p.id}">Add to bag</button><button class="enquire-button" data-enquire="${p.id}">WhatsApp enquiry</button></div></div></article>`;
}
function renderProducts(){
  const list=activeCategory==="All"?products:products.filter(p=>p.category===activeCategory);
  $("#productGrid").innerHTML=list.map(productCard).join("");
  $("#productGrid").querySelectorAll("[data-add]").forEach(b=>b.addEventListener("click",()=>addToCart(Number(b.dataset.add))));
  $("#productGrid").querySelectorAll("[data-enquire]").forEach(b=>b.addEventListener("click",()=>{const p=products.find(x=>x.id===Number(b.dataset.enquire));openWhatsApp(`Namaste FORME! I am enquiring about:\nProduct: ${p.name}\nCategory: ${p.category}\nSample price shown: ${money(p.price)} (please confirm actual price and availability)\nPlease share available sizes, colours and final price.`);}));
}
function addToCart(id){const p=products.find(x=>x.id===id);const existing=cart.find(x=>x.id===id);if(existing)existing.qty++;else cart.push({...p,qty:1});updateCart();showToast("Added to your bag");}
function updateCart(){
  $("#cartCount").textContent=cart.reduce((n,p)=>n+p.qty,0);
  $("#cartTotal").textContent=money(cart.reduce((n,p)=>n+p.price*p.qty,0));
  $("#cartItems").innerHTML=cart.length?cart.map(p=>`<div class="cart-line"><img src="${p.image}" alt=""><div class="cart-line-info"><strong>${p.name}</strong><small>${p.category} · Sample ${money(p.price)} × ${p.qty}</small><button class="remove-item" data-remove="${p.id}">Remove</button></div></div>`).join(""):'<p>Your bag is empty. Add a product to enquire about it.</p>';
  $("#cartItems").querySelectorAll("[data-remove]").forEach(b=>b.addEventListener("click",()=>{cart=cart.filter(p=>p.id!==Number(b.dataset.remove));updateCart();}));
}
function openCart(){ $("#cartDrawer").classList.add("open");$("#cartDrawer").setAttribute("aria-hidden","false"); }
function closeCart(){ $("#cartDrawer").classList.remove("open");$("#cartDrawer").setAttribute("aria-hidden","true"); }
function checkout(){
  if(!cart.length){showToast("Your bag is empty");return;}
  const lines=cart.map(p=>`• ${p.name} (${p.category}) × ${p.qty} — sample ${money(p.price)}`).join("\n");
  openWhatsApp(`Namaste FORME! I would like to enquire about these items:\n\n${lines}\n\nSample subtotal: ${money(cart.reduce((n,p)=>n+p.price*p.qty,0))}\n\nPlease confirm actual prices, sizes, colours, availability, delivery charges and payment options. I understand this is an enquiry, not a confirmed order.`);
}
function init(){
  renderCategories();renderFilters();renderProducts();updateCart();
  $("#year").textContent=new Date().getFullYear();
  const hello="Namaste FORME! Please share your current collection, prices and available sizes.";
  $("#visitWhatsapp").href=waUrl(hello);$("#footerWhatsapp").href=waUrl(hello);
  $("#cartButton").addEventListener("click",openCart);$("#closeCart").addEventListener("click",closeCart);$("#drawerBackdrop").addEventListener("click",closeCart);$("#checkoutButton").addEventListener("click",checkout);
  $("#menuToggle").addEventListener("click",()=>{const nav=$("#mainNav");const open=nav.classList.toggle("open");$("#menuToggle").setAttribute("aria-expanded",String(open));});
  $("#mainNav").querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>$("#mainNav").classList.remove("open")));
}
document.addEventListener("DOMContentLoaded",init);
