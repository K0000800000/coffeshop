import { useEffect, useState } from "react";

export const useData = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [coffeeItems, setCoffeeItems] = useState([]);
    const [drinksItems, setDrinksItems] = useState([]);
    const [juicesItems, setJuicesItems] = useState([]);
    const [teaItems, setTeaItems] = useState([]);
    const [snacksItems, setSnacksItems] = useState([]);
    const [otherProductsItems, setOtherProductsItems] = useState([]);
    const [specialItems, setSpecialItems] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [photosLoading, setPhotosLoading] = useState(true);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/K3247/hg-data/main/data/user.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setFeedbacks(data))
            .catch(error => console.error('Error fetching feedbacks:', error));
    }, []);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/K3247/hg-data/main/data/product.json")
            .then(response => response.json())
            .then(data => setSpecialItems(data.SpecialMenu))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/K3247/hg-data/main/data/product.json")
            .then(response => response.json())
            .then(data => setCoffeeItems(data.Coffee))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/K3247/hg-data/main/data/product.json")
            .then(response => response.json())
            .then(data => setDrinksItems(data.Drinks))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/K3247/hg-data/main/data/product.json")
            .then(response => response.json())
            .then(data => setJuicesItems(data.Juices))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/K3247/hg-data/main/data/product.json")
            .then(response => response.json())
            .then(data => setTeaItems(data.Tea))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/K3247/hg-data/main/data/product.json")
            .then(response => response.json())
            .then(data => setSnacksItems(data.Snacks))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/K3247/hg-data/main/data/product.json")
            .then(response => response.json())
            .then(data => setOtherProductsItems(data.OtherProducts))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/K3247/hg-data/main/data/gallery.json")
            .then(response => response.json())
            .then(data => {
                setPhotos(data);
                setPhotosLoading(false);
            })
            .catch(error => {
                console.error('Error fetching gallery data:', error);
                setPhotosLoading(false);
            });
    }, []);

    return { feedbacks, specialItems, coffeeItems, drinksItems, juicesItems, teaItems, snacksItems, otherProductsItems, photos, photosLoading };
};