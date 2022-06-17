import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";


const CreateScreen = ({ navigation }) => {


    const { addBlogPost } = useContext(Context);

    return <BlogPostForm onSubmit={(title, content) => { addBlogPost(title, content, () => navigation.navigate('Index')) }} />
}

const styles = StyleSheet.create({
    input: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5,

    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default CreateScreen;