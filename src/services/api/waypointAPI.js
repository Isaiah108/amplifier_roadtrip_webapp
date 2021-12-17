import axios from 'axios';

const WAYPOINTS_REST_API_URL_CREATE_UPDATE = 'http://amplifireroadtripbeanstalk-env.eba-amdewhu5.us-west-2.elasticbeanstalk.com/waypoints';
const WAYPOINTS_REST_API_URL_READ = 'http://amplifireroadtripbeanstalk-env.eba-amdewhu5.us-west-2.elasticbeanstalk.com/waypoints/getAll/';
const WAYPOINTS_REST_API_URL_DELETE = 'http://amplifireroadtripbeanstalk-env.eba-amdewhu5.us-west-2.elasticbeanstalk.com/waypoints/';

class WaypointService {

    createWaypoint(waypoint) {
        
        return axios.post(WAYPOINTS_REST_API_URL_CREATE_UPDATE, 
            "{ \"waypointName\": " + JSON.stringify(waypoint.waypointName) + 
            ", \"latitude\": " + JSON.stringify(waypoint.latitude) + 
            ", \"longitude\": " + JSON.stringify(waypoint.longitude) +    
            ", \"trip\": { \"tripId\": " + sessionStorage.getItem('tripId') + "} }" , {
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('jwt'),
                "Content-Type": "application/json",
            }
        });

        
        
    }

    getAllWaypoints() {
        return axios.get(WAYPOINTS_REST_API_URL_READ + sessionStorage.getItem('tripId'), {
            headers: {
              'Authorization': 'Bearer ' + sessionStorage.getItem('jwt'),
              "Content-Type": "application/json",
            }
        });
    }

    editWaypoint(waypoint) {
        return axios.put(WAYPOINTS_REST_API_URL_CREATE_UPDATE + 
            "{ \"waypointId\": " + JSON.stringify(waypoint.waypointId) + 
            ", \"waypointName\": " + JSON.stringify(waypoint.tripName) +
            ", \"latitude\": " + JSON.stringify(waypoint.latitude) + 
            ", \"longitude\": " + JSON.stringify(waypoint.longitude) + 
            ", \"trip\": { \"tripId\": " + sessionStorage.getItem("tripId"), {
                headers: {
                    'Authorization': 'Bearer ' + sessionStorage.getItem('jwt'),
                    "Content-Type": "application/json",
                }
            });
    }

    deleteWaypoint(waypoint) {
        return axios.delete(WAYPOINTS_REST_API_URL_DELETE + JSON.stringify(waypoint.waypointId), {
            headers: {
                'Authorization:': 'Bearer ' + sessionStorage.getItem('jwt'),
            }
        })
    }

}

export default new WaypointService();

