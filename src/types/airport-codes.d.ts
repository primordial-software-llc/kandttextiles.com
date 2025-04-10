declare module 'airport-codes' {
  interface Airport {
    name: string;
    city: string;
    country: string;
    iata: string;
    icao: string;
    longitude: number;
    latitude: number;
    alt: number;
  }

  const airportCodes: {
    toJSON: () => Airport[];
    get: (iataCode: string) => Airport;
    findWhere: (query: Partial<Airport>) => Airport[];
  };

  export default airportCodes;
} 