import * as THREE from 'three'
import { flattenFacialLandMarkArray, createBufferAttribute } from './utils/faceMesh'
import WebcamCanvas from './utils/WebcamCanvas'
import ThreeSetUp from './utils/sceneSetUp'
import faceLandMark from './faceLandmark'
import PointCloud from './pointCloud'


class FacePointCloud {
    threeSetUp: ThreeSetUp
    setUpElements: ThreeSetUpElements
    webcamCanvas: WebcamCanvas
    pointCloud: PointCloud
    faceMeshDetector: faceLandMark

    constructor() {
        this.threeSetUp = new ThreeSetUp()
        this.setUpElements = this.threeSetUp.getSetUp()
        this.webcamCanvas = new WebcamCanvas()
        this.faceMeshDetector = new faceLandMark()
        this.pointCloud = new PointCloud()
    }

    async bindFaceDataToPointCloud() {

        // 11

        // const keypointsJSONString = localStorage.getItem("keypointsData");


        // if (keypointsJSONString) {
        // // Parse the JSON string to an array of objects
        //     const keypointsList = JSON.parse(keypointsJSONString);

        //     keypointsList.forEach((keypoint: {x: number, y: number, z: number}) => {
        //         setTimeout(() => {

        //         const vectors = [
        //             new THREE.Vector3(keypoint.x, keypoint.y, keypoint.z)
        //         ];
        //         // console.log(vectors)
        //         const flatData = flattenFacialLandMarkArray(vectors);
        //         const facePositions = createBufferAttribute(flatData);
        //         this.pointCloud.updateProperty(facePositions, 'position');
        //         }, 2000); // delay of 2 seconds
        //     });
            
        // }



        // 22


        // const keypointsJSONString = localStorage.getItem("keypointsData");

        // if (keypointsJSONString) {
        // // Parse the JSON string to an array of objects
        // const keypointsList = JSON.parse(keypointsJSONString);

        // // Define an asynchronous function to loop through keypoints
        // const loopThroughKeypoints = async () => {
        //     for (const keypoint of keypointsList) {

        //         const vectors = [
        //             new THREE.Vector3(keypoint.x, keypoint.y, keypoint.z)
        //         ];
        //         console.log(vectors)
        //         const flatData = flattenFacialLandMarkArray(vectors);
        //         const facePositions = createBufferAttribute(flatData);
        //         this.pointCloud.updateProperty(facePositions, 'position');
        //         await new Promise((resolve) => setTimeout(resolve, 8000)); // delay of 2 seconds
        //     }
        // };

        // loopThroughKeypoints();
        // }



        // const keypointsJSONString = localStorage.getItem("keypointsData");

        // if (keypointsJSONString) {
        //    const keypointsList = JSON.parse(keypointsJSONString);
        //    const markData = ["ee"];
        // //    markData.append(keypointsList)
        //    console.log("keypointsJSONString");
        //    console.log(keypointsList[0]);
        // }


        // 33

        // load keypoints 

        // const keypointsJSONString = localStorage.getItem("keypointsData");

        // if (keypointsJSONString) {
        // // Parse the JSON string to an array of objects
        //     const keypointsList = JSON.parse(keypointsJSONString);

        //     keypointsList.forEach((keypoint: {x: number, y: number, z: number}, index: number) => {
        //         setTimeout(() => {
        //             const vectors = [
        //                 new THREE.Vector3(keypoint.x, keypoint.y, keypoint.z)
        //             ];
        //             console.log(vectors)
        //             // Do something with the keypoints here
        //             const flatData = flattenFacialLandMarkArray(vectors)
        //             const facePositions = createBufferAttribute(flatData)
        //             this.pointCloud.updateProperty(facePositions, 'position')
        //         }, index * 1000);
        //     });
        // }


        // async function loopWithDelay(keypointsList: Array<{x: number, y: number, z: number}>, index: number) {
        // if (index >= keypointsList.length) {
        //     // Exit the recursive loop when all keypoints have been processed
        //     return;
        // }
        
        // const keypoint = keypointsList[index];
        // const vectors = [
        //     new THREE.Vector3(keypoint.x, keypoint.y, keypoint.z)
        // ];
        // const flatData = flattenFacialLandMarkArray(vectors)
        // const facePositions = createBufferAttribute(flatData)
        // this.pointCloud.updateProperty(facePositions, 'position')
        
        // // Delay the execution of the next iteration by 2 seconds
        // await new Promise(resolve => setTimeout(resolve, 2000));
        
        // // Call the loop function recursively with the next index
        // loopWithDelay(keypointsList, index + 1);
        // }
        
        // // Load the keypoints data from local storage
        // const keypointsJSONString = localStorage.getItem("keypointsData");
        
        // if (keypointsJSONString) {
        // // Parse the JSON string to an array of objects
        // const keypointsList = JSON.parse(keypointsJSONString);
        
        // // Start the recursive loop with the first index
        // loopWithDelay(keypointsList, 0);
        // }

          















        // // store keypoints


        // const keypoints  = await this.faceMeshDetector.detectFace(this.webcamCanvas.canvas)


        // const keypointsList: {x: number, y: number, z: number}[] = [];


        // keypointsList.push(...keypoints.map(keypoint => {
        // const x = keypoint.x;
        // const y = keypoint.y;
        // const z = keypoint.z;
        // return {x, y, z};
        // }));

        // const keypointsJSONString = JSON.stringify(keypointsList);

        // localStorage.setItem("keypointsData", keypointsJSONString);


        // Detect the face and append the keypoints to the list
        // const keypointsList: {x: number, y: number, z: number, name: string}[] = [];

        // keypointsList.push(...keypoints.map(keypoint => {
        //     if(keypoint.name){
        //         const x = keypoint.x;
        //         const y = keypoint.y;
        //         const z = keypoint.z;
        //         const name = keypoint?.name;
        //         return {x, y, z, name};
        //     }
        //     else{
        //         const x = keypoint.x;
        //         const y = keypoint.y;
        //         const z = keypoint.z;
        //         return {x, y, z};
        //     }
        //   }));


        // that is the format for the keypoints
        // {name: "lips", x: -0.35057008266448975, y: 0.6824343495368957, z: 0.6054319459944963}
        // {x: -0.35057008266448975, y: 0.6824343495368957, z: 0.6054319459944963}
        // const keypoints  = await this.faceMeshDetector.detectFace(this.webcamCanvas.canvas)

        
        // i want to append the keypoints to a list. if the name is not in the keypoints  leave it out like in the example else add it like in the example.
        // setItem to localStorage





        // const keypoints = await this.faceMeshDetector.detectFace(this.webcamCanvas.canvas)

        // // Retrieve the existing list of keypoints from localStorage or initialize it as an empty array
        // let keypointsList: { x: number, y: number, z: number, name?: string }[] = JSON.parse(localStorage.getItem("keypoints") || '[]');

        // // Loop through each keypoint detected by the faceMeshDetector
        // keypoints.forEach((keypoint: { x: number, y: number, z: number, name?: string }) => {
        // // Check if the keypoint has a name property
        // if (keypoint.name) {
        //     // If the keypoint has a name property, store it in the desired format with name, x, y, and z properties
        //     const { x, y, z, name } = keypoint;
        //     keypointsList.push({ x, y, z, name });
        // } else {
        //     // If the keypoint does not have a name property, store it in the desired format with only x, y, and z properties
        //     const { x, y, z } = keypoint;
        //     keypointsList.push({ x, y, z });
        // }
        // });

        // Save the updated list of keypoints to localStorage
        // localStorage.setItem("keypoints", JSON.stringify(keypointsList));


        // First, retrieve the keypoints list from local storage
        // const keypointsList = JSON.parse(localStorage.getItem('keypointsList') as string) || [];

        // // Loop through the keypointsList
        // for (const keypoints of keypointsList) {
        // // Do something with each keypoints array
        //     console.log(keypoints)
        //     const flatData = flattenFacialLandMarkArray(keypoints)
        //     const facePositions = createBufferAttribute(flatData)
        //     this.pointCloud.updateProperty(facePositions, 'position')
        //     // await new Promise(resolve => setTimeout(resolve, 3000));
        // }











        // // First, retrieve the keypoints list from local storage
        // const keypointsList = JSON.parse(localStorage.getItem('keypointsList') as string) || [];

        // // Loop through the keypointsList with a delay of 3 seconds between each iteration
        // for (const keypoints of keypointsList) {
        // // Do something with each keypoints array
        //     console.log(keypoints);
        //     // const flatData = flattenFacialLandMarkArray(keypoints)
        //     // // console.log(flatData);
        //     // const facePositions = createBufferAttribute(flatData)
        //     // // console.log(facePositions)
        //     // this.pointCloud.updateProperty(facePositions, 'position')

        // // Add a delay of 3 seconds
        //     await new Promise(resolve => setTimeout(resolve, 3000));
        // }


        // First, retrieve the keypoints list from local storage
        // const keypointsList = JSON.parse(localStorage.getItem('keypointsList') as string) || [];

        // // Loop through the keypointsList with a delay of 3 seconds between each iteration
        // for (let i = 0; i < keypointsList.length; i++) {
        //     // Do something with each keypoints array
        //     const keypoints = keypointsList[i];
        //     if(keypoints){
        //         console.log(keypoints);

        //         // Log the current iteration count and the length of the array
        //         console.log(`Iteration ${i + 1} of ${keypointsList.length}`);

        //         // Add a delay of 3 seconds
        //         await new Promise(resolve => setTimeout(resolve, 3000));
        //     }
        // }


        // const keypointsList = JSON.parse(localStorage.getItem('keypointsList') as string) || [];


        // console.log("keypointsList")
        // console.log(keypointsList)




        // // Retrieve the keypoints list from local storage
        // const keypointsList = JSON.parse(localStorage.getItem('keypointsList') as string) || [];

        // // Log the keypoints list to the console
        // console.log('keypointsList:', keypointsList);





        // const flatData = flattenFacialLandMarkArray(keypointsList)
        // // console.log(keypointsList);
        // // console.log(flatData);
        // const facePositions = createBufferAttribute(flatData)
        // // console.log(facePositions)
        // this.pointCloud.updateProperty(facePositions, 'position')





        






        // const keypoints = await this.faceMeshDetector.detectFace(this.webcamCanvas.canvas)

        
        // const keypointsList = JSON.parse(localStorage.getItem('keypointsList') as string) || [];

        // // Then, append the new keypoints array to the existing list
        // keypointsList.push(keypoints);

        // // Finally, save the updated keypoints list back to local storage
        // localStorage.setItem('keypointsList', JSON.stringify(keypointsList));



        // const flatData = flattenFacialLandMarkArray(keypoints)
        // console.log(keypoints);
        // // console.log(flatData);
        // const facePositions = createBufferAttribute(flatData)
        // // console.log(facePositions)
        // this.pointCloud.updateProperty(facePositions, 'position')



    }



    async initWork() {
        const { camera, scene, renderer } = this.setUpElements
        camera.position.z = 3
        camera.position.y = 1
        camera.lookAt(0, 0, 0)
        const orbitControlsUpdate = this.threeSetUp.applyOrbitControls()

        const gridHelper = new THREE.GridHelper(10, 10)
        scene.add(gridHelper)
        scene.add(this.pointCloud.cloud)

        await this.faceMeshDetector.loadDetector()

        const animate = () => {
            requestAnimationFrame(animate)
            if (this.webcamCanvas.receivingStreem) this.bindFaceDataToPointCloud()
            this.webcamCanvas.updateFromWebCam()

            orbitControlsUpdate()
            renderer.render(scene, camera)
        }

        animate()
    }
}

new FacePointCloud().initWork()
