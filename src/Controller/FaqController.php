<?php

namespace App\Controller;

use App\Entity\Faq;
use App\Form\FaqType;
use App\Repository\FaqRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/faq')]
class FaqController extends AbstractController
{
    #[Route('/', name: 'app_faq_index', methods: ['GET'])]
    public function index(FaqRepository $faqRepository): Response
    {
        return $this->render('faq/index.html.twig', [
            'faqs' => $faqRepository->findAll(),
        ]);
    }

    #[Route('/visiteur', name: 'app_faq_visiteur', methods: ['GET'])]
    public function visiteurIndex(FaqRepository $faqRepository): Response
    {
        return $this->render('faq/visiteur.html.twig', [
            'faqs' => $faqRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_faq_new', methods: ['GET', 'POST'])]
    public function new(Request $request, FaqRepository $faqRepository): Response
    {
        $faq = new Faq();
        $form = $this->createForm(FaqType::class, $faq);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $faqRepository->save($faq, true);
            return $this->redirectToRoute('app_faq_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('faq/new.html.twig', [
            'faq' => $faq,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_faq_show', methods: ['GET'])]
    public function show(Faq $faq): Response
    {
        return $this->render('faq/show.html.twig', [
            'faq' => $faq,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_faq_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Faq $faq, FaqRepository $faqRepository): Response
    {
        $form = $this->createForm(FaqType::class, $faq);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $faqRepository->save($faq, true);

            return $this->redirectToRoute('app_faq_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('faq/edit.html.twig', [
            'faq' => $faq,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_faq_delete', methods: ['POST'])]
    public function delete(Request $request, Faq $faq, FaqRepository $faqRepository): Response
    {
        if ($this->isCsrfTokenValid('delete' . $faq->getId(), $request->request->get('_token'))) {
            $faqRepository->remove($faq, true);
        }

        return $this->redirectToRoute('app_faq_index', [], Response::HTTP_SEE_OTHER);
    }
}
