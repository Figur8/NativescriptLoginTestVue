<template>
    <Page>
        <ActionBar title="Geolocation" class="action-bar" />
        <ScrollView>
            <StackLayout class="home-panel">
                <Button text="Get My Location" @tap="getLocation"
                        class="btn btn-primary" />

                <Label :text="'Latitude: ' + lat" class="lbl" />
                <Label :text="'Longitude: ' + lon" class="lbl" />

            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    const geolocation = require("nativescript-geolocation");
    const {
        Accuracy
    } = require("tns-core-modules/ui/enums");
    export default {
        data() {
            return {
                lat: "",
                lon: "",
                speed: "",
                addr: ""
            };
        },
        methods: {
            getLocation() {
                geolocation
                    .getCurrentLocation({
                        desiredAccuracy: Accuracy.high,
                        maximumAge: 5000,
                        timeout: 20000
                    })
                    .then(res => {
                        this.lat = res.latitude;
                        this.lon = res.longitude;
                    });
            }
        },
        mounted() {
            geolocation.enableLocationRequest();
        }
    };
</script>

<style scoped>

</style>