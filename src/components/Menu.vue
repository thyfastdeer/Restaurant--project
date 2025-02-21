<template>
     
    
    <v-container>
      <v-container>
        <v-card color="blue" >
            <v-card-title>
                <div class="text-h3">Our Menu</div>
            </v-card-title>
        </v-card>
      </v-container>
        <v-card class="mx-auto" elevation="24">
            <v-container>
            <v-row>
                <v-col cols="12" md="4" v-for="item in menuItems":key=item>
                    <v-card>
                        <v-card  color="#D79828">
                            <v-card-item>
                                <v-card-title>{{ item.name }}</v-card-title>

                                <v-card-subtitle>{{ item.description }} </v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px":src="item.image"cover></v-img>
                        <v-card-text>
                        {{ item.price }}
                        </v-card-text>
                        <v-btn color="black" variant="tonial" @click="addToOrder(item)"> Order</v-btn>
                        </v-card>
                        
                    </v-card>

                </v-col>
            </v-row>
            </v-container>
        </v-card>
    </v-container>
    <v-container>
        <v-card color="blue" >
            <v-card-title>
                <div class="text-h6">Current order: {{totalOrderAmount}}</div>
            </v-card-title>
        </v-card>
    </v-container>
    <v-container>
        <v-card class="mx-auto" elevation="24">
            <v-container>
                <v-row>
                    <v-col cols="12" md="4" v-for="item in orderItems" :key=item>
                        <v-card color="yellow">
                            <v-card-item>
                            <v-card-title>{{ item.name }}</v-card-title>

                            <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px" :src="item.image" cover ></v-img>

                            <v-card-text>{{ item.price }}</v-card-text>
                        </v-card>
                        </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-container>
</template>

<script setup>
import Order from './Order.vue'

const menuItems = [
    {
        name: "Chips",
        price: 200,  
        description: "Best chips in town",
        size: "Large",
        offers: "None",
        image: "/logan-weaver-lgnwvr-qgZRZI-pKgM-unsplash.jpg"
    },
    {
        name: "Sausage",
        price: 50,
        description: "Best sausages in town",
        size: "None",
        offers: "None",
        image: "/likemeat-cSxpCQrRlo8-unsplash.jpg"
    },
    {
        name: "Soda",
        price: 100,
        description: "Best Soda in town",
        size: "Large",
        offers: "None",
        image: "/alex-haney-4KLT91f3mAM-unsplash.jpg"
    },
    {
        name: "Chapati",
        price: 50,
        description: "Best Chapatis in town",
        size: "None",
        offers: "None",
        image: "/usman-yousaf-4GDW-Rt4BVQ-unsplash.jpg"
    },
    {
        name: "Tea",
        price: 80,
        description: "Best Tea in town",
        size: "Large",
        offers: "None",
        image: "/rumman-amin-bJzJH85Kp7g-unsplash.jpg"
    },
    {
        name: "Wine",
        price: 5000,
        description: "Best Wine in town",
        size: "None",
        offers: "None",
        image: "/kevin-kelly-PPneSBqfCCU-unsplash.jpg"
    } 
    ]
    var orderItems = []
    var totalOrderAmount= 0

    function calculateTotalAmount(price){
        totalOrderAmount = price
    }
  
    function addToOrder (item){
        orderItems.push(item)
        calculateTotalAmount(item.price)
    }

</script>