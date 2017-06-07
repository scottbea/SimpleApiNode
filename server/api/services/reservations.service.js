// APIKEY: 38070bbd-8cd3-4501-8c47-e6fc6c4a8536

const pd = require('pretty-data').pd;

const messages = [];

export class ReservationService {
    GetReservationById(id, apiKey) {
        var response = {};
        response.statusCode = 401;
        console.log("Request for reservation id: " + id + " and apiKey: " + apiKey);
        if (apiKey === '38070bbd-8cd3-4501-8c47-e6fc6c4a8536') {
            if (id && id.trim().length) {
                response.statusCode = 200;
                var sampleReservation = {
                    "genericPaginator": {
                        "@page": 1,
                        "@pageSize": 300,
                        "@size": 1,
                        "reservation": [{
                            "@etag": "38117287361",
                            "@url": "\/reservations\/00c0\/80913680-19b6-4895-900b-8a0fc7627b03",
                            "inserted": "2017-06-05T20:42:33.253Z",
                            "updated": "2017-06-05T20:42:43.390Z",
                            "active": true,
                            "availabilityStatus": "RESERVE",
                            "bookingChannel": {
                                "advertiser": {"@href": "\/advertisers\/0020\/112e7d7e-e4b0-4213-ba2c-f3ed4bc5d24e"},
                                "advertiserSite": "HOMEAWAY_US",
                                "guestSite": "HOMEAWAY_US",
                                "guestSystemId": "HOMEAWAY",
                                "propertyUrl": "stage.homeaway.com\/vacation-rental\/p3641254?uni_id=3655670"
                            },
                            "checkinTime": 16,
                            "checkoutTime": 11,
                            "contact": {
                                "active": true,
                                "address": {
                                    "address1": "123 Main St.",
                                    "addressLine1": "123 Main St.",
                                    "country": "US",
                                    "postalCode": 78758
                                },
                                "city": "Austin",
                                "countryCode": "US",
                                "email": "scottb@someemail.com",
                                "firstName": "Scott",
                                "home": "+1 (512) 961-3151",
                                "lastName": "Beeler",
                                "state": "TX"
                            },
                            "conversation": {
                                "@href": "\/conversations\/findByLink?lucky=true&url=\/reservations\/00c0\/80913680-19b6-4895-900b-8a0fc7627b03",
                                "@rel": "conversation"
                            },
                            "guestProfile": {
                                "contacts": {"@href": "\/reservationContacts\/findByReservation?url=\/reservations\/00c0\/80913680-19b6-4895-900b-8a0fc7627b03&profileType=GUEST"},
                                "adults": 2,
                                "children": 1,
                                "pets": 0
                            },
                            "locale": "en_US",
                            "ownerProfile": {"contacts": {"@href": "\/reservationContacts\/findByReservation?url=\/reservations\/00c0\/80913680-19b6-4895-900b-8a0fc7627b03&profileType=OWNER"}},
                            "propertyProfile": {"druid": {"@href": "\/druids\/0060\/eb2a8807-599e-4209-9396-3e450eab9835"}},
                            "reservationDates": {"beginDate": "2017-06-23", "endDate": "2017-06-28"},
                            "reservationPaymentStatus": "UNPAID",
                            "reservationReferenceNumber": "HA-BK615X",
                            "source": "IB",
                            "status": "CONFIRMED",
                            "travelerNote": null,
                            "travelerOrders": {"@href": "\/travelerOrders\/00c0\/findByReservation?url=\/reservations\/00c0\/80913680-19b6-4895-900b-8a0fc7627b03"}
                        }]
                    }
                };
                sampleReservation.reservationId = id;
                response.results = sampleReservation;
                console.log(pd.json(response));
            }
            else {
                response.statusCode = 404;
            }
        }
        return Promise.resolve(response);
    }
}

export default new ReservationService();