import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";


const EditScreen = ({ navigation }) => {



    const { editBlogPost } = useContext(Context);
    const { state } = useContext(Context);
    const id = navigation.getParam('id');
    const blogPost = state.find((blogPost) => blogPost.id === id);

    return <BlogPostForm
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => { editBlogPost(id, title, content, () => navigation.pop()) }} />
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

export default EditScreen; 
