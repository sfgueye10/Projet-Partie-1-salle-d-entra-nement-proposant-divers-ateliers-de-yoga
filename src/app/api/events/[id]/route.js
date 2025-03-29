import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req, { params }) {
  try {
    // Attendre avant d'accéder à `params.id`
    const { id } = await params;

    // Vérifier si l'ID est un nombre valide
    const eventId = Number(id);
    if (isNaN(eventId)) {
      return NextResponse.json(
        { message: "ID d'événement invalide" },
        { status: 400 }
      );
    }

    // Récupérer l'événement depuis la base de données
    const event = await prisma.event.findUnique({
      where: { id: eventId },
    });

    // Si l'événement n'existe pas, retourner une erreur 404
    if (!event) {
      return NextResponse.json(
        { message: "Événement non trouvé" },
        { status: 404 }
      );
    }

    // Retourner l'événement en JSON
    return NextResponse.json(event, { status: 200 });
  } catch (error) {
    console.error('Error fetching event:', error);
    return NextResponse.json(
      { message: "Erreur interne du serveur", error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  try {
    // Attendre avant d'accéder à `params.id`
    const { id } = await params;
    const body = await req.json();
    const { date, title, location, description, imageUrl } = body;

    // Vérifier si l'ID est un nombre valide
    const eventId = Number(id);
    if (isNaN(eventId)) {
      return NextResponse.json(
        { message: "ID d'événement invalide" },
        { status: 400 }
      );
    }

    // Vérifier si l'événement existe
    const event = await prisma.event.findUnique({
      where: { id: eventId },
    });

    if (!event) {
      return NextResponse.json(
        { message: "Événement non trouvé" },
        { status: 404 }
      );
    }

    // Mettre à jour l'événement
    const updatedEvent = await prisma.event.update({
      where: { id: eventId },
      data: { date, title, location, description, imageUrl },
    });

    return NextResponse.json(updatedEvent, { status: 200 });
  } catch (error) {
    console.error('Error updating event:', error);
    return NextResponse.json(
      { message: "Erreur interne du serveur", error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    // Attendre avant d'accéder à `params.id`
    const { id } = await params;

    // Vérifier si l'ID est un nombre valide
    const eventId = Number(id);
    if (isNaN(eventId)) {
      return NextResponse.json(
        { message: "ID d'événement invalide" },
        { status: 400 }
      );
    }

    // Vérifier si l'événement existe
    const event = await prisma.event.findUnique({
      where: { id: eventId },
    });

    if (!event) {
      return NextResponse.json(
        { message: "Événement non trouvé" },
        { status: 404 }
      );
    }

    // Supprimer l'événement
    await prisma.event.delete({
      where: { id: eventId },
    });

    return NextResponse.json(
      { message: "Événement supprimé avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting event:', error);
    return NextResponse.json(
      { message: "Erreur interne du serveur", error: error.message },
      { status: 500 }
    );
  }
}
