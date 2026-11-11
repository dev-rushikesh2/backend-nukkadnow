import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { StructuredLogger } from "@nukkadnow/observability";

@WebSocketGateway({ cors: { origin: "*" } })
export class RealtimeGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server!: Server;

  private logger = new StructuredLogger("realtime-gateway");

  handleConnection(client: Socket) {
    this.logger.info(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.info(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage("join_outlet_room")
  handleJoinOutletRoom(client: Socket, outletId: string) {
    client.join(`outlet:${outletId}`);
    return { event: "joined", room: `outlet:${outletId}` };
  }
}
