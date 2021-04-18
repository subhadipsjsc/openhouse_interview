

function find_path(data ,start,end , arr=[]){
    if(data[start] ){
        arr.push(start)
        if(data[start].prev){
            previous_data = data[start].prev
            if(previous_data == end) {
                arr.push(end)
                return;
            }
            else{
               find_path(data , previous_data,end , arr)
            }
        }
    }
}

function make_tree(data , source ,destination, my_tree, i=0 ){
    let step = i;
    step++;
    if(data[source] ){
        for(const itm of data[source]){
            if(itm == destination ) {
                if(my_tree[itm] && my_tree[itm].stp > step){
                    my_tree[itm] = {prev : source , stp : step  }
                }
                else{
                    my_tree[itm] = {prev : source , stp : step  }
                }
               
                break;
            }
            else{
                if(!my_tree[itm] || my_tree[itm] > step){
                    my_tree[itm] = {prev : source , stp : step }
                    make_tree(data , itm ,destination, my_tree, step)
                }
            }
        }       
        
    }
}



data = {
    "Devika": ["Atika", "Pranav", "Rahul"],
    "Atika": ["Devika", "Vanshika"],
    "Pranav": ["Devika", "Prateek", "Priyanka", "Vanshika"],
    "Priyanka": ["Pranav", "Rahul"],
    "Prateek": ["Pranav", "Sneha", "Rishika",],
    "Sneha": ["Prateek", "Rishika", 'Sofia', 'Lucas'],
    "Rishika": ["Prateek", "Sneha", 'Liam', 'Nathan'],
    "Vanshika": ['Nathan', "Pranav", "Atika"],
    "Rahul": ["Priyanka", "Devika", 'Scott']
}




const source = "Prateek"
const destination= "Rahul"
let my_tree ={}
make_tree(data , source ,destination,my_tree)
// console.log(JSON.stringify(my_tree, null, 4))

let path =[] 
find_path(my_tree ,destination ,  source , path );
console.log(path.reverse())





